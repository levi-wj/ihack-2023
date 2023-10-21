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
        <h3>The .sort() method</h3>
        <p>Sort is an array method that will give you back a new array with all the elements of your old array in a new order.</p>
        <p>Sort takes one parameter--a comparison function--that is used to determine the order of the new array.</p>
        
        <h3>Example</h3>
        <div class="code-example">
            <p>let b = 'string';</p>
            <p>array.find(function(a, b) {'{'}</p>
            <p class="indent1">return a > b;</p>
            <p>{'}'}</p>
        </div>
    </div>
    <div class="puzzle">
        <div class="code">
            <p>// find the puppy in the array with the name 'Ollie'</p>
            <p><span>let puppyArray = [</span></p>
            <p class="indent1"><span>{'{'}id: 'puppy1', name: 'Ollie'{'}'},</span></p>
            <p class="indent1"><span>{'{'}id: 'puppy2', name: 'Dio'{'}'},</span></p>
            <p class="indent1"><span>{'{'}id: 'puppy3', name: 'Courage'{'}'}</span></p>
            <p>];</p>
            <p>
                <span>puppyArray</span>
                <DropSpot {addPoint} expectedText="&period;sort" />
                <span>(function(puppy1, puppy2) {'{'}</span>
            </p>
            <p class="indent1">
                <span>return puppy</span>
                <DropSpot {addPoint} expectedText="puppy1&period;name" />&nbsp;
                <span>==&nbsp</span>
                <DropSpot {addPoint} expectedText="puppy2&period;name" />&nbsp;
                <span>;</span>
            </p>
            <p>
                <span>{'}'}</span>
            </p>
        </div>
        <div class="drawer">
            <DragBlock text="puppy2&period;name" left={10} />
            <DragBlock text="puppy1&period;name" left={110} />
            <DragBlock text="&period;sort" left={210} />
        </div>
    </div>
</div>