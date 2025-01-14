<style lang="scss">
    .commissions-status a {
        grid-column: col-start 4 / span 3;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: flex-start;
        gap: 6px;

        span {
            white-space: nowrap;
        }

        .green-dot {
            border-radius: 50%;
            width: 14px;
            height: 14px;
            background: var(--green);
            animation: 1.5s infinite blink;
            transition: opacity 0.2s;
            aspect-ratio: 1/1;
        }
    }

    @keyframes blink {
        0% { opacity: 0.2; }
        50% { opacity: 1; }
        100% { opacity: 0.2; }
    }
</style>

<div class="commissions-status">
    <a href="/about" title="Contact us">
        <span class="green-dot"></span>
        <span>Open for Commissions</span>
    </a>
</div>