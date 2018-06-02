<template>
  <section>
    <div>
      <h1 class="title">
        <img src="~/assets/images/logo.png" alt="Gladi-Gladi" class="logo">
        Gladi-Gladi Trust
      </h1>
      <ul class="projects">
        <li>
          <a
            class="logo"
            href="http://tassoisland.org/">
            <img src="~/assets/images/tep-logo.png" alt="Gladi-Gladi" class="logo">
          </a>
          <h2>Tasso Ecotourism Project</h2>
          <p>We support ecotourism on Tasso Island in Sierra Leone.</p>
          <a class="cta"
          href="http://tassoisland.org/">
            Find out more
          </a>
        </li>
      </ul>
    </div>
  </section>
</template>

<style lang="scss">
.container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-size: 3rem;
  img {
    height: 60px;
    width: 60px;
  }
  @media (max-width: 480px) {
    font-size: 1.5rem;
  }
}

ul.projects {
  margin: 2rem 0 0;
  padding: 0;

  > li {
    list-style: none;
    margin: 0;
    padding: 0;
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

.links {
  margin-top: 2rem;
  a {
    padding: 1rem;
    img {
      height: 100px;
      width: 100px;
    }
  }
}
</style>
