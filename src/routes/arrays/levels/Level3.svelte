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
        <h3>The .find() method</h3>
        <p>Find the first item in an array that matches a rule defined in the callback function.</p>
        <h3>Example</h3>
        <div class="code-example">
            <p>let b = 'string';</p>
            <p>array.find(function(a) {'{'}</p>
            <p class="indent1">return a == b;</p>
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
                <DropSpot {addPoint} expectedText="&period;find" />
                <span>(function(puppy) {'{'}</span>
            </p>
            <p class="indent1">
                <DropSpot {addPoint} expectedText="return" />&nbsp
                <span>puppy</span>
                <DropSpot {addPoint} expectedText="&period;name" />&nbsp;
                <span>==&nbsp</span>
                <DropSpot {addPoint} expectedText="'Ollie'" />&nbsp;
                <span>;</span>
            </p>
            <p>
                <span>{'}'}</span>
            </p>
        </div>
        <div class="drawer">
            <DragBlock text="return" left={10} />
            <DragBlock text="'Ollie'" left={110} />
            <DragBlock text="&period;find" left={210} />
            <DragBlock text="&period;name" left={310} />
        </div>
    </div>
</div>