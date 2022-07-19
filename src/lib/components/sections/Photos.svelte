<script lang="ts">
    let photos = [
        // { title: '', src: '/photos/001.jpeg' },
        // { title: '', src: '/photos/002.jpeg' },
        // { title: '', src: '/photos/003.jpg' },
        { title: 'Korea - 2018', src: '/photos/004.jpg' },
        { title: 'Apple Orchard - 2021', src: '/photos/005.jpeg' },
        { title: 'Proposal - 2021', src: '/photos/006.jpeg' },
        // { title: '', src: '/photos/007.png' },
        { title: "New Year's Eve - 2022", src: '/photos/008.jpeg' },
        { title: '💍 - 2022', src: '/photos/009.png' },
    ]

    export const name = 'wedding-photos'

    export const itemId = (index: number) => `${name}-${index + 1}`
</script>

<div id="photos">
    <ul class="flex overflow-x-auto snap-x snap-mandatory">
        {#each photos as { title, src }, index}
            <li id={`${itemId(index)}`} class="shrink-0 snap-center">
                <img
                    class="max-h-[400px] md:max-h-[600px] lg:max-h-[80vh]"
                    {src}
                    {title}
                    alt={title}
                />
            </li>
        {/each}
    </ul>
</div>
