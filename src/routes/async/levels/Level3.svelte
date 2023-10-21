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
        <h3></h3>
    </div>
    <div class="puzzle">
        <div class="code">
            <p><span>const source1 = fetch('dog.ceo/api/labs');</span></p>
            <p>
                <span>const source2 =&nbsp;</span>
                <DropSpot {addPoint} expectedText="fetch" />
                <span>('dog.ceo/api/beagles');</span>
            </p>
            <p>
                <span>const [data1, data2] =&nbsp;</span>
                <DropSpot {addPoint} expectedText="await" />
                <span>&nbsp;</span>
                <DropSpot {addPoint} expectedText="Promise.all" />
                <span>([source1, source2]);</span>
            </p>
            <p>
                <span>const parsedData1 =&nbsp;</span>
                <DropSpot {addPoint} expectedText="await" />
                <span>&nbsp;data1.json();</span>
            </p>
            <p>
                <span>const parsedData2 = await data2.&nbsp;</span>
                <DropSpot {addPoint} expectedText="json" />
            </p>
            <p style="margin-top: 2em">
                <span>return [parsedData1, parsedData2];</span>
            </p>
        </div>
        <div class="drawer">
            <DragBlock text="fetch" left={10} />
            <DragBlock text="await" left={110} />
            <DragBlock text="Promise.all" left={210} />
            <DragBlock text="json" left={365}/>
        </div>
    </div>
</div>