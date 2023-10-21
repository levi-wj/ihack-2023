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
        <h3>Await in loops</h3>
        <p>Promise.all() can be used in conjunction with .map() to do an async request to every url in an array.</p>
        <p>The .map will return an array of promises, because async functions ALWAYS return promises.</p>
        <p>After the .map returns the array of promises, Promise.all() will resolve all the promises, just like an await statement would.</p>
        <h3>Code Example</h3>
        <div class="code-example">
            <p><span>const endpoints = ['api.com/1', 'api.com/2']</span></p>
            <p style="margin-top: 1em;">
                <span>await Promise.all(</span>
            </p>
            <p class="indent1">
                <span>endpoints.map(async (endpoint) => {'{'}</span>
            </p>
            <p class="indent2">
                <span>const response = await fetch(endpoint);</span>
            </p>
            <p class="indent1">
                <span>{'}'})</span>
            </p>
            <p>
                <span>);</span>
            </p>
        </div>
    </div>
    <div class="puzzle">
        <div class="code">
            <p><span>const urls = [</span></p>
            <p class="indent1"><span>'dog.ceo/api/husky',</span></p>
            <p class="indent1"><span>'dog.ceo/api/corgi',</span></p>
            <p><span>];</span></p>
            <p><span>const responses = [];</span></p>
            <p style="margin-top: 1em;">
                <DropSpot {addPoint} expectedText="await" />
                <span>&nbsp;Promise.all(</span>
            </p>
            <p class="indent1">
                <span>urls</span>
                <DropSpot {addPoint} expectedText=".map" />
                <span>(async (url) => {'{'}</span>
            </p>
            <p class="indent2">
                <span>const response = await&nbsp;</span>
                <DropSpot {addPoint} expectedText="fetch" />
                <span>(url);</span>
            </p>
            <p class="indent2">
                <span>const data =&nbsp;<span>
                <DropSpot {addPoint} expectedText="await" />
                </span>&nbsp; response.json();</span>
            </p>
            <p class="indent2">
                <DropSpot {addPoint} expectedText="responses" />
                <span>.push(data);</span>
            </p>
            <p class="indent1">{'}'})</p>
            <p>);</p>
        </div>
        <div class="drawer">
            <DragBlock text="responses" left={10} />
            <DragBlock text="await" left={140} />
            <DragBlock text="fetch" left={230} />
            <DragBlock text="await" left={320} />
            <DragBlock text=".map" left={410} />
        </div>
    </div>
</div>