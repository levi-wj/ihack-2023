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
        <h3>Promise.all()</h3>
        <p>Await is great for waiting to make sure your data is there before later code tries to access it. Sometimes though, you may want to run multiple fetch() calls at the same time for faster performance.</p>
        <p>We can use Promise.all(promise1, promise2, ...) to get the results of all our fetch() calls simultaniously. </p>
        <h3>Code Example</h3>
        <div class="code-example">
            <p>const first = fetch('data1.com/api');</p>
            <p>const second = fetch('data2.com/api');</p>
            <p>const [data1, data2] = await Promise.all(first, second);</p>
            <p style="margin-top: .5em">// To get JSON out of data1 or data2, we still need to to await the .json() call</p>
        </div>
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
            <DragBlock text="await" left={210} />
            <DragBlock text="Promise.all" left={310} />
            <DragBlock text="json" left={465}/>
        </div>
    </div>
</div>