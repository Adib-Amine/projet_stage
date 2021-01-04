<template>
  <b-container fluid>
    <!-- <link href="https://fonts.googleapis.com/css?family=Poppins:300,400,500,600,700,800,900" rel="stylesheet"> -->
    <!-- <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"> -->
    <!-- <link rel="preconnect" href="https://fonts.gstatic.com"> -->
    <link href="https://fonts.googleapis.com/css2?family=Montserrat&display=swap" rel="stylesheet">
    <b-row>
      <b-col id="description">
        <p id="title">Avec ClassTime</p>
        <span><i class='bx bx-calendar-check'></i> Visualisez vos emplois du temps avec toute
          aisance.<br>
        </span> <span><i class='bx bx-calendar-check'></i> Modifiez vos créneaux avec une
          flexibilité.<br>
        </span> <span><i class='bx bx-calendar-check'></i> Restez toujours notifiés à l’approche
          des devoirs et d’examens.
        </span>


      </b-col>
      <b-col cols="6" id="img-col">
        <img  id="img" src="../assets/Time.png" alt="Fluid-grow image"/>
      </b-col>
    </b-row>
  </b-container>

</template>

<style>
#img-col {
  display: flex;
  /* justify-content: start; */
  align-items: center;
}

#img {
  width: 600px;
}

#description {
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 50px;
}

#description span {
  font-family: 'Montserrat', sans-serif;
  font-size: 20px;
  margin-top: 10px;
}

#title {
  font-family: 'Montserrat', sans-serif;
  font-size: 30px;
  font-weight: bold;
}
</style>
