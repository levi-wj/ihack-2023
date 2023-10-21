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
        <h3>The .filter() method</h3>
        <p>The filter method creates a new array by adding array items that meet the requirements set in the callback function.</p>
        <h3>Example</h3>
        <div class="code-example">
            <p>let b = 4;</p>
            <p>array.filter(function(a) {'{'}</p>
            <p class="indent1">return a.length > b;</p>
            <p>{'}'}</p>
        </div>
    </div>
    <div class="puzzle">
        <div class="code">
            <p>// filter the array to show only the puppies with names longer than 3 letters</p>
            <p><span>let puppyArray = [</span></p>
            <p class="indent1"><span>{'{'}id: 'puppy1', name: 'Ollie'{'}'},</span></p>
            <p class="indent1"><span>{'{'}id: 'puppy2', name: 'Dio'{'}'},</span></p>
            <p class="indent1"><span>{'{'}id: 'puppy3', name: 'Courage'{'}'}</span></p>
            <p>];</p>
            <p>
                <span>puppyArray</span>
                <DropSpot {addPoint} expectedText="&period;filter" />
                <span>(function(puppy) {'{'}</span>
            </p>
            <p class="indent1">
                <DropSpot {addPoint} expectedText="return" />&nbsp
                <span>puppy</span>
                <DropSpot {addPoint} expectedText="&period;name" />
                <DropSpot {addPoint} expectedText="&period;length" />&nbsp;
                <span>> 3;</span>
            </p>
            <p>
                <span>{'}'}</span>
            </p>
        </div>
        <div class="drawer">
            <DragBlock text="&period;name" left={10} />
            <DragBlock text="&period;filter" left={110} />
            <DragBlock text="&period;length" left={210} />
            <DragBlock text="return" left={310} />
        </div>
    </div>
</div>