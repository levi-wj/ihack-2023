<script>
    export let text = '';
    export let left = 0;
    export let top = 10;
	
	let moving = false;
	
	function onMouseDown() {
		moving = true;
	}

	function onMouseUp(e) {
        if (moving) {
            moving = false;
        }
	}
	
	function onMouseMove(e) {
		if (moving) {
			left += e.movementX;
			top += e.movementY;
		}
	}
</script>

<span style="left: {left}px; top: {top}px;" on:mousedown={onMouseDown} class="draggable">
    {text}
</span>

<svelte:window on:mouseup={onMouseUp} on:mousemove={onMouseMove} />

<style>
    .draggable {
        position: absolute;
        cursor: grab;
        user-select: none;
        -webkit-user-drag: none;
        -webkit-touch-callout: none;
        -webkit-tap-highlight-color: transparent;
        padding: .4em .75em;
        background-color: var(--text);
        border: 2px solid var(--black);
        border-radius: 10px;
        z-index: 100;
    }

    .draggable:hover {
        border: 2px solid var(--primary-light);
        background-color: var(--primary-light);
        color: var(--text);
    }
</style>