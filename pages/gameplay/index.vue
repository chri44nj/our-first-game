<script setup>
const scale = ref(1);
const translate = ref({ x: 0, y: 0 });
const isDragging = ref(false);
const start = ref({ x: 0, y: 0 });

const MIN_SCALE = 0.25; // fits 400vw/400vh into 100vw/100vh
const MAX_SCALE = 1; // zoomed into 1 quadrant (1:1)

const mapStyle = computed(() => ({
  width: "400vw",
  height: "400vh",
  transform: `translate(${translate.value.x}px, ${translate.value.y}px) scale(${scale.value})`,
  transformOrigin: "0 0",
  transition: isDragging.value ? "none" : "transform 0.05s",
}));

function handleWheel(e) {
  if (!e.ctrlKey) return; // Let normal scroll work

  e.preventDefault();

  const zoomAmount = -e.deltaY * 0.0015;
  const newScale = Math.min(MAX_SCALE, Math.max(MIN_SCALE, scale.value + zoomAmount));

  if (newScale === scale.value) return;

  const rect = e.currentTarget.getBoundingClientRect();
  const cursorX = e.clientX - rect.left;
  const cursorY = e.clientY - rect.top;

  const dx = cursorX - translate.value.x;
  const dy = cursorY - translate.value.y;

  const ratio = newScale / scale.value;

  translate.value.x -= dx * (ratio - 1);
  translate.value.y -= dy * (ratio - 1);
  scale.value = newScale;

  clampTranslation();
}

function handleMouseDown(e) {
  if (!e.ctrlKey) return;
  isDragging.value = true;
  start.value = { x: e.clientX, y: e.clientY };
}

function handleMouseMove(e) {
  if (!isDragging.value) return;

  const dx = e.clientX - start.value.x;
  const dy = e.clientY - start.value.y;
  translate.value.x += dx;
  translate.value.y += dy;
  start.value = { x: e.clientX, y: e.clientY };

  clampTranslation();
}

function handleMouseUp() {
  isDragging.value = false;
}

function clampTranslation() {
  const viewport = document.documentElement.getBoundingClientRect();
  const mapWidth = window.innerWidth * 4 * scale.value;
  const mapHeight = window.innerHeight * 4 * scale.value;

  const maxX = 0;
  const minX = viewport.width - mapWidth;
  const maxY = 0;
  const minY = viewport.height - mapHeight;

  translate.value.x = Math.min(maxX, Math.max(minX, translate.value.x));
  translate.value.y = Math.min(maxY, Math.max(minY, translate.value.y));
}

let animationFrameId = null;

function easeInOutQuad(t) {
  return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
}

function animateTo(targetScale, targetTranslate, duration = 300) {
  if (animationFrameId) cancelAnimationFrame(animationFrameId);

  const startScale = scale.value;
  const startTranslate = { x: translate.value.x, y: translate.value.y };
  const startTime = performance.now();

  function animate(time) {
    const elapsed = time - startTime;
    const progress = Math.min(elapsed / duration, 1);
    const easedProgress = easeInOutQuad(progress);

    scale.value = startScale + (targetScale - startScale) * easedProgress;
    translate.value.x = startTranslate.x + (targetTranslate.x - startTranslate.x) * easedProgress;
    translate.value.y = startTranslate.y + (targetTranslate.y - startTranslate.y) * easedProgress;

    if (progress < 1) {
      animationFrameId = requestAnimationFrame(animate);
    } else {
      animationFrameId = null;
      clampTranslation();
    }
  }

  animationFrameId = requestAnimationFrame(animate);
}

function handleDoubleClick(e) {
  if (e.shiftKey) {
    // Shift + Ctrl + Double-click => Zoom all the way out with animation
    const newScale = MIN_SCALE;
    const mapWidth = window.innerWidth * 4 * newScale;
    const mapHeight = window.innerHeight * 4 * newScale;

    const newTranslate = {
      x: (window.innerWidth - mapWidth) / 2,
      y: (window.innerHeight - mapHeight) / 2,
    };

    animateTo(newScale, newTranslate);
    return;
  }

  if (!e.ctrlKey) return;

  const rect = e.currentTarget.getBoundingClientRect();

  const clickX = (e.clientX - rect.left - translate.value.x) / scale.value;
  const clickY = (e.clientY - rect.top - translate.value.y) / scale.value;

  const quadrantWidth = window.innerWidth;
  const quadrantHeight = window.innerHeight;

  const col = Math.floor(clickX / quadrantWidth);
  const row = Math.floor(clickY / quadrantHeight);

  const clampedCol = Math.max(0, Math.min(3, col));
  const clampedRow = Math.max(0, Math.min(3, row));

  const centerX = clampedCol * quadrantWidth + quadrantWidth / 2;
  const centerY = clampedRow * quadrantHeight + quadrantHeight / 2;

  const newScale = 1;
  const newTranslate = {
    x: window.innerWidth / 2 - centerX,
    y: window.innerHeight / 2 - centerY,
  };

  animateTo(newScale, newTranslate);
}
</script>

<template>
  <div ref="viewport" class="w-screen h-screen overflow-hidden relative bg-charcoal" @wheel="handleWheel" @mousedown="handleMouseDown" @mouseup="handleMouseUp" @mouseleave="handleMouseUp" @mousemove="handleMouseMove" @dblclick="handleDoubleClick">
    <div ref="map" class="grid grid-cols-[repeat(4,100vw)] grid-rows-[repeat(4,100vh)]" :style="mapStyle">
      <Quadrant1 area="Slumps" />
      <GameQuadrant area="Slumps" />
      <GameQuadrant area="Slumps" />
      <GameQuadrant area="Docks" />
      <GameQuadrant area="Slumps" />
      <GameQuadrant area="Suburbs" />
      <GameQuadrant area="Inner City" />
      <GameQuadrant area="Inner City" />
      <GameQuadrant area="Suburbs" />
      <GameQuadrant area="Suburbs" />
      <GameQuadrant area="Inner City" />
      <GameQuadrant area="Inner City" />
      <GameQuadrant area="Industrial" />
      <GameQuadrant area="Industrial" />
      <GameQuadrant area="Industrial" />
      <GameQuadrant area="Inner City" />
    </div>
  </div>
</template>

<style scoped>
html,
body {
  margin: 0;
  padding: 0;
  overflow: hidden;
}
</style>
