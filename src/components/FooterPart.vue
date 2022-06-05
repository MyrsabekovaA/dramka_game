<template>
<footer>
  <div class="footer_info">
    <div class="copyright">
      <span>Copyright ©
      <a href="https://github.com/MyrsabekovaA/dramka_game" style="text-decoration: none; color: white"><b>DRAMKA</b></a>
        2022
      </span>
    </div>
  </div>
</footer>
</template>

<script>
export default {
  name: "FooterPart"
}
</script>

<style lang="scss" scoped>
footer{
  padding: 2rem 0;
  position: sticky;
}
.footer_info{
  padding-left: 1.5rem;
  padding-right: 1.5rem;
  margin: auto;
}
.copyright{
  font-size: 1rem;
  line-height: 1;
  text-align: center;
  color: white;
  text-decoration: none;
  list-style: none;
}
</style>