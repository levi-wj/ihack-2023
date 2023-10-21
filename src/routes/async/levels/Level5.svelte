<script>
	import DragBlock from "../../../lib/components/DragBlock.svelte";
    import DropSpot from "../../../lib/components/DropSpot.svelte";
    
    export let completeLevel;

    let points = 0;
    const pointsNeeded = 5;
    
    function addPoint() {
        points++;
        if (points === pointsNeeded) {
            completeLevel();
        }
    }
</script>

<div class="puzzle-container">
    <div class="sidebar">
        <h3>Async error handling</h3>
        <p>Since we don't have .catch() when using Promises with async/await, we need to wrap our code in a try/catch block to do error handling.</p>
        <div class="code-example">
            <p><span>try {'{'}</span></p>
            <p class="indent1"><span>await fetch('api.com/data');</span></p>
            <p><span>{'}'} catch (error) {'{'}</span></p>
            <p class="indent1"><span>console.error(error);</span></p>
            <p><span>{'}'}</span></p>
        </div>
    </div>
    <div class="puzzle">
        <div class="code">
            <p>// Pull data from the dog.ceo api</p>
            <p>
                <DropSpot {addPoint} expectedText="async" />
                <span>&nbsp;function getData() {'{'}</span>
            </p>
            <p class="indent1">
                <DropSpot {addPoint} expectedText="try" />
                <span> {'{'}</span>
            </p>
            <p class="indent2">
                <span>const stream = await&nbsp;</span>
                <DropSpot {addPoint} expectedText="fetch" />
                <span>('dog.ceo/api');</span>
            </p>
            <p class="indent2">
                <span>const data = await stream.&nbsp;</span>
                <DropSpot {addPoint} expectedText="json()" />
            <p class="indent1">
                <span>{'}'}&nbsp;</span>
                <DropSpot {addPoint} expectedText="catch" />
                <span>(error) {'{'}</span>
            </p>
            <p class="indent2">
                <span>console.error(error);</span>
            </p>
            <p class="indent1">
                <span>{'}'}</span>
            </p>
            <p>
                <span>{'}'}</span>
            </p>
        </div>
        <div class="drawer">
            <DragBlock text="try" left={10} />
            <DragBlock text="catch" left={80} />
            <DragBlock text="fetch" left={170} />
            <DragBlock text="async" left={260} />
            <DragBlock text="json()" left={350} />
        </div>
    </div>
</div>