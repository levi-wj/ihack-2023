<script>
	import DragBlock from "../../../lib/components/DragBlock.svelte";
    import DropSpot from "../../../lib/components/DropSpot.svelte";
    
    export let completeLevel;

    let points = 0;
    const pointsNeeded = 4;
    
    function addPoint() {
        points++;
        if (points === pointsNeeded) {
            completeLevel();
        }
    }
</script>

<div class="puzzle-container">
    <div class="sidebar">
        <h3>Two awaits?</h3>
        <p>This code example may look a little strange because of the two await statements right after each other:</p>
        <div class="code-example" style="margin-bottom: 1em">
            <p>const stream = await fetch('dog.ceo/api');</p>
            <p>const data = await stream.json();</p>
        </div>
        <p>We do this because the first fetch() call returns a ReadableStream, which contains a json() method.</p>
        <p>To extract and parse the data from this stream, you use the .json() method, which returns a promise that resolves to the request's returned JSON. </p>
    </div>
    <div class="puzzle">
        <div class="code">
            <p>// Pull data from the dog.ceo api</p>
            <p>
                <span>const stream =&nbsp;</span>
                <DropSpot {addPoint} expectedText="await" />
                <span>&nbsp;</span>
                <DropSpot {addPoint} expectedText="fetch" />
                <span>('dog.ceo/api');</span>
            </p>
            <p>
                <span>const data =&nbsp;</span>
                <DropSpot {addPoint} expectedText="await" />
                <span>&nbsp;stream.</span>
                <DropSpot {addPoint} expectedText="json" />
                <span>;</span>
            </p>
            <p>
                <span>return data;</span>
            </p>
        </div>
        <div class="drawer">
            <DragBlock text="fetch" left={10} />
            <DragBlock text="await" left={110} />
            <DragBlock text="await" left={210} />
            <DragBlock text="json" left={310}/>
        </div>
    </div>
</div>