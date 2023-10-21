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
        <h3>The .reduce() method</h3>
        <p></p>
        <h3>Example</h3>
        <div class="code-example">
            <p>array.reduce(function(sum, item) {'{'}</p>
            <p class="indent1">return sum + item;</p>
            <p>{'}'}</p>
        </div>
    </div>
    <div class="puzzle">
        <div class="code">
            <p>// Reduce the numbers in the array to create a sum</p>
            <p>let puppyArray = [23, 10, 49, -13];</p>
            <p>
                <span>puppyArray</span>
                <DropSpot {addPoint} expectedText="&period;reduce" />
                <span>(function(sentence, word) {'{'}</span>
            </p>
            <p class="indent1">
                <DropSpot {addPoint} expectedText="return" />&nbsp
                <DropSpot {addPoint} expectedText="sum" />&nbsp;
                <span> +&nbsp;</span>
                <DropSpot {addPoint} expectedText="addend" />&nbsp;;
            </p>

            <p>
                <span>{'}'}</span>
            </p>
        </div>
        <div class="drawer">
            <DragBlock text="return" left={10} />
            <DragBlock text="&period;reduce" left={110} />
            <DragBlock text="addend" left={210} />
            <DragBlock text="sum" left={310} />
        </div>
    </div>
</div>