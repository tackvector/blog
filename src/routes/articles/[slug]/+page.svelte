<script>
    export let data;
</script>

<article>
    <h2>{data.props.title}</h2>
    <p>Published: {data.props.date}</p>
    <svelte:component this={data.props.content} />
</article>
