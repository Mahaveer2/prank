<script lang="ts">
  import Article from "../components/Article.svelte";
  import { articles } from "../lib/constants";
  import "./style.scss";
</script>

<h1 class="heading">Welcome to Astra</h1>

<div class="new__wrapper">
{#each articles as article}
  <Article {article} />
{/each}
</div>