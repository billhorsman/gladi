<template>
  <section>
    <ul class="projects">
      <li>
        <a
          class="logo"
          href="http://tassoisland.org/">
          <img src="~/assets/images/tep-logo.png" alt="Gladi-Gladi" class="logo">
        </a>
        <h2>Tasso Ecotourism Project</h2>
        <p>We support ecotourism on Tasso Island in Sierra Leone.</p>
        <div class="cta">
          <a class="btn btn-secondary"
            href="http://tassoisland.org/">
            Find out more
          </a>
        </div>
      </li>
    </ul>
  </section>
</template>

<style lang="scss">

ul.projects {
  margin: 2rem 0 0;
  padding: 0;

  > li {
    background: rgba(255, 255, 255, .8);
    color: black;
    list-style: none;
    margin: 0;
    padding: 1rem;
    text-align: left;
  }

  .logo {
    display: block;
    float: left;
    margin-right: 1rem;
    img {
      width: 100px;
    }
  }

  h2 {
    font-size: 1.3rem;
  }

  .cta {
    text-align: right;
  }

  @media (max-width: 480px) {
    > li {
      text-align: center;
    }
    .logo {
      float: none;
      margin: 0 auto 1rem;
    }
  }
}

</style>
