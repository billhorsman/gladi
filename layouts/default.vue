<template>
  <section class="container-fluid">
    <header>
      <h1>
        <img src="~/assets/images/logo.png" alt="Gladi-Gladi" class="logo">
        Gladi-Gladi Trust
      </h1>
    </header>
    <nuxt/>
    <footer>
      &copy; Gladi-Gladi Trust 2017-2018. The Gladi-Gladi Trust is a <a href="https://www.gov.uk/government/organisations/charity-commission">registered charity in England and Wales</a> no. 1179219
    </footer>
  </section>
</template>

<style lang="scss">
  body {
    background: #713AF3;
    color: white;
  }
  .container-fluid {
    align-items: center;
    display: grid;
    grid-template-columns: 1fr minmax(280px, 520px) 1fr;
    grid-template-rows: 72px 1fr 56px;
    justify-content: center;
    min-height: 100vh;
    text-align: center;
  }
  header {
    grid-column-start: 1;
    grid-column-end: 4;
    text-align: left;
    width: 100%;
  }
  h1 {
    font-size: 2rem;
    padding: .5rem 0;
    img {
      height: 60px;
      width: 60px;
    }
    @media (max-width: 480px) {
      font-size: 1.5rem;
    }
  }
  section {
    grid-column-start: 2;
    grid-column-end: 3;
    text-align: center;
  }
  footer {
    grid-column-start: 1;
    grid-column-end: 4;
    padding: 1rem;
    text-align: right;
    width: 100%;
    a {
      color: white;
    }
  }
  a {
    border-bottom: 1px solid #ccc;
    padding: 2px 1px;
    text-decoration: none;
    transition: all .3s;
    &:hover {
      background: rgba(255, 255, 255, .1);
      border-color: white;
      color: white;
      text-decoration: none;
    }
  }
</style>
