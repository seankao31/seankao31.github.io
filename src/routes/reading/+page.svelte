<script>
	let { data } = $props();
  
    // Helper to render stars
    function getStars(rating) {
      return "★".repeat(rating) + "☆".repeat(10 - rating);
    }
</script>


<svelte:head>
    <title>Reading</title>
</svelte:head>

<h1>Reading</h1>

<article class="reading-prose">
    <p>This page collects all the nonfiction books I’ve read, along with the ratings I’d give them. I’d love to remember every single title and retroactively attach a “finished on” date, but after over a decade of active reading... that’s probably impossible.</p>
    <p>A note on my ratings: I use a 1-10 scale, but they reflect how much I personally enjoyed the book, not how “objectively good” I think it is. The scale is closer to <a href="https://www.japantravelpros.com/blog/star-ratings-reviews-japan-is-different">Japanese restaurant reviews</a> than Western Goodreads-style ratings. A 5 or 6 means good, 7 or 8 means great, and anything above 8 is genuinely exceptional.</p>
</article>
  
<div class="reading-container">
    <div class="book-list">
        {#each data.books as book}
            <div class="book-row">
                <div class="cell title">{book.title}</div>
                <!-- Add title in case it's truncated -->
                <div class="cell author" title={book.author}>{book.author}</div>
                <div class="cell rating" aria-label="{book.rating} out of 10 stars">
                    {getStars(book.rating)}
                </div>
            </div>
        {/each}
    </div>
</div>
  
<style>
    .reading-prose {
        margin-bottom: 3rem;
    }

    .reading-container {
        width: 100%;
    }

    .book-list {
        display: flex;
        flex-direction: column;
    }

    .book-row {
        display: grid;
        grid-template-columns: minmax(0, 3fr) minmax(0, 1.5fr) min-content;
        align-items: center;
        /* Gap between columns */
        gap: 1.25rem;

        /* Gap between rows */
        padding: 0.5rem 0.5rem; /* More vertical breathing room */
        margin: 0 -0.5rem; /* Negative margin pulls the hover background outwards slightly */
        border-radius: 0.5rem; /* Soft corners for the hover block */
        transition: background-color 0.15s ease-in-out;
    }

    .book-row:hover {
        background-color: var(--lightAccent);
    }

    .cell {
        min-width: 0; /* Crucial for flex/grid children to allow shrinking */
    }

    .cell.title {
        font-weight: 700;
        overflow-wrap: break-word;
    }

    .cell.author {
        color: var(--darker);
        /* Truncate */
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }

    .cell.rating {
        color: var(--darker);
        font-size: 1rem;
    }

    @media (max-width: 48rem) {
        .book-row {
            /* Stack them on mobile */
            grid-template-columns: 1fr;
            gap: 5px;
            padding: 15px 0;
        }

        .cell.title {
            font-size: 1.1rem;
        }

        .cell.author, .cell.rating {
            font-size: 0.9rem;
        }
    }
</style>