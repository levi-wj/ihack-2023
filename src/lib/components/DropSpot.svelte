<script>
    export let expectedText = '';
    export let addPoint;

    let isDone = false;
    let dropSpan;

    function handleMouseUp(e) {
        if (!isDone) {
            if (e.target.classList.contains('draggable') && doesMouseOverlapElement(dropSpan, e.clientX, e.clientY)) {
            // console.log(e.target, expectedText)
                if (e.target.innerText === expectedText) {
                    e.target.parentElement.removeChild(e.target);
                    dropSpan.innerText = expectedText;
                    dropSpan.classList.remove('drop-spot');
                    addPoint();
                    isDone = true;
                }
            }
        }
    }

    function doesMouseOverlapElement(element, mouseX, mouseY) {
        const buffer = 5;
        const elementRect = element.getBoundingClientRect();
        const elementTop = elementRect.top - buffer;
        const elementBottom = elementRect.bottom + buffer;
        const elementLeft = elementRect.left - buffer;
        const elementRight = elementRect.right + buffer;
  
        // Check if the mouse coordinates are within the element boundaries
        return (
            mouseX >= elementLeft &&
            mouseX <= elementRight &&
            mouseY >= elementTop &&
            mouseY <= elementBottom
        );
    }
</script>

<span class="drop-spot" bind:this={dropSpan}></span>

<svelte:window on:mouseup={handleMouseUp} />

<style>
    .drop-spot {
        border: 3px dashed var(--primary-light);
        border-radius: 10px;
        padding: 0 2.5em;
        height: 2em;
        width: 2em;
    }
</style>