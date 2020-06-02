<!-- HEADER -->

<?php include("section/header.php"); ?>

<!-- NAVBAR -->
<?php include("section/navbarpage.php"); ?>

<!-- MOBILE NAVBARs -->
<?php include("section/navbarmobile.php"); ?>


<!-- PAGE CONTENT -->
<section class="classes section" id="classes">
  <div class="title class-title">Bridge Courses</div>
  <div class="class-list">
    <button onclick="document.location='./pages/tution.php'">PCL</button><br>
    <button onclick="document.location='./pages/bridgecourse.php'">Diploma</button><br>
    <button onclick="document.location='./pages/computercourse.php'">A Level</button><br>
    <button onclick="document.location='./pages/language.php'">+2 Science</button>
  </>
  <div class="class-image"><img src="./image/class.png" alt=""></div>
</section>

<!-- CONTACT -->
<?php include("section/contact.php");?>

<!-- FOOTER -->
<?php include("section/footer.php"); ?>