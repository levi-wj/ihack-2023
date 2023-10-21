<script>
    import { onMount } from "svelte";

    export let realDOMRoot;

    let fakeDOMParent = null;

    function allDescendants (node, parent) {
        for (let i = 0; i < node.children.length; i++) {
            let child = node.children[i];
            let createdP = createFakeNode(child);
            parent.appendChild(createdP);
            allDescendants(child, createdP);
        }
    }

    function createFakeNode (node) {
        let p = document.createElement('p');
        const html = node.outerHTML.replace(node.innerHTML || '', '');
        p.innerText = html;
        if (node.dataset.selected === 'true') {
            p.classList.add('selected');
        }
        
        return p;
    }

    onMount(() => {
        if (realDOMRoot) {
            allDescendants(realDOMRoot, fakeDOMParent);
        }
    });
</script>

<div bind:this={fakeDOMParent}></div>