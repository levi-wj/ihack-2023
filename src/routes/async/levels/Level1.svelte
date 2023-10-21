<script>
	import DragBlock from "../../../lib/components/DragBlock.svelte";
    import DropSpot from "../../../lib/components/DropSpot.svelte";
    
    export let completeLevel;

    let points = 0;
    const pointsNeeded = 3;
    
    function addPoint() {
        points++;
        if (points === pointsNeeded) {
            completeLevel();
        }
    }
</script>

<div class="puzzle-container">
    <div class="sidebar">
        <h3>Awaiting APIs</h3>
        <p>Often when using an API, we send out requests and we don't know how long they'll take to come back.</p>
        <p>In these cases, we want to use await to pause our code execution until the request finishes before continuing.</p>
        <h3>Asynchronous functions</h3>
        <p>Since await disrupts normal code flow, it can only be used in functions marked with the async keyword.</p>
        <h3>Using fetch</h3>
        <p>Fetch is a javascript function that allows you to get data from other websites.</p>
        <p>The syntax is: fetch('url.to.get.data.from')</p>
        <h3>Code example</h3>
        <div class="code-example">
            <p>const source = <span style="font-weight: bold">await</span> fetch('data.com/api')</p>
            <p>// Because of the await, the program will wait for </p>
            <p>// the above line to finish before continuing</p>
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
                <span>const stream =&nbsp;</span>
                <DropSpot {addPoint} expectedText="await" />
                <span>&nbsp;</span>
                <DropSpot {addPoint} expectedText="fetch" />
                <span>('dog.ceo/api');</span>
            </p>
            <p>
                <span>{'}'}</span>
            </p>
        </div>
        <div class="drawer">
            <DragBlock text="fetch" left={10} />
            <DragBlock text="await" left={110} />
            <DragBlock text="async" left={210} />
        </div>
    </div>
</div>