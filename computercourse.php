<!-- HEADER -->

<?php include("section/header.php"); ?>

<!-- NAVBAR -->
<?php include("section/navbarpage.php"); ?>

<!-- MOBILE NAVBARs -->
<?php include("section/navbarmobile.php"); ?>


<!-- PAGE CONTENT -->
<section class="classes section" id="classes">
  <div class="title class-title">Computer Courses</div>
  <div class="class-list">
    <button onclick="document.location='./pages/tution.php'">Office Package</button><br>
    <button onclick="document.location='./pages/bridgecourse.php'">Graphics</button><br>
    <button onclick="document.location='./pages/computercourse.php'">AutoCAD</button><br>
    <button onclick="document.location='./pages/language.php'">Accounting</button>
  </div>
  <div class="class-image"><img src="./image/class.png" alt=""></div>
</section>

<!-- CONTACT -->
<?php include("section/contact.php");?>

<!-- FOOTER -->
<?php include("section/footer.php"); ?>