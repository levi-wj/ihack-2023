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
        <h3>Array methods</h3>
        <p>Every array has built in methods that allow you to search through the data to find specific items, or transform the data in the array.</p>
        <h3>The .map() method</h3>
        <p>The map method creates a new array by iterating through a prexisting array, and running a callback function on each item.</p>
        <h3>Example</h3>
        <div class="code-example">
            <p>array.map(function(a) {'{'}</p>
            <p class="indent1">return a + 'b';</p>
            <p>{'}'}</p>
        </div>
    </div>
    <div class="puzzle">
        <div class="code">
            <p>// Map the array to make the items jpeg image files</p>
            <p>let puppyArray = ['puppy1', 'puppy2', 'puppy3'];</p>
            <p>
                <span>puppyArray</span>
                <DropSpot {addPoint} expectedText="&period;map" />
                <span>(function(puppy_picture) {'{'}</span>
            </p>
            <p class="indent1">
                <DropSpot {addPoint} expectedText="return" />&nbsp
                <span> puppy_picture +&nbsp;</span>
                <DropSpot {addPoint} expectedText="'.jpeg'" />&nbsp;;
            </p>

            <p>
                <span>{'}'}</span>
            </p>
        </div>
        <div class="drawer">
            <DragBlock text="&period;map" left={10} />
            <DragBlock text="return" left={110} />
            <DragBlock text="'.jpeg'" left={210} />
        </div>
    </div>
</div>