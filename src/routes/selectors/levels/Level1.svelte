<script>
	import { onMount } from "svelte";
    import SelectorInput from "../../../lib/components/SelectorInput.svelte";
    import VisualDom from "../../../lib/components/VisualDOM.svelte";

    export let completeLevel;

    let realDOMRoot = null;

    onMount(() => {
        realDOMRoot = document.getElementById('real-dom');
        
        new SelectorInput({
            props: {
                realDOMRoot,
            },
            target: document.getElementById('drawer'),
        });
    });
</script>

<div class="puzzle-container">
    <div class="sidebar">
        <h3>Array methods</h3>
        <p></p>
        <h3>Example</h3>
        <div class="code-example">
            <p>array.map(function(a) {'{'}</p>
            <p class="indent1">return a + 'b';</p>
            <p>{'}'}</p>
        </div>
    </div>
    <div class="puzzle">
        <div class="code" id="visual-dom">
            {#key realDOMRoot}
                <VisualDom {realDOMRoot} />
            {/key}
        </div>
        <div class="drawer" id="drawer"></div>
    </div>
</div>

<div style="display: none" id="real-dom">
    <div class="puppies">
        <img src="puppy1.jpg" id="puppy" >
        <img src="puppy2.jpg" />
    </div>
    <div class="puppies">
        <img src="puppy3.jpg" />
        <img src="puppy4.jpg" />
    </div>
</div>