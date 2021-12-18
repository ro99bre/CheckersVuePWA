<template>
  <div class="about">
    <div class="container">
      <div class="col-md-12">
        <h1 class=site-heading>TUTORIAL</h1>
        <ol>
          <li class=paragraph-heading>
            Determine who will have the first turn.
            <p>
              <span class=paragraph-text>
                Before you set up the board, you need to choose who goes first. <br>
                You can do this based on who won the last game, <br>
                a coin toss, or by any other method. The person who will go first will take the black checkers and the other will take the white. <br>
                <span class=paragraph-text-bold>Keep in mind that in checkers, the player with the black checkers always goes first</span>
              </span>
            </p>
          </li>
          <li class=paragraph-heading>
            Game Setup
            <p>
              <span class=paragraph-text>
                Sit across from your opponent and place the board between you and your opponent.
                The board is made up of 64 alternating dark and light squares which appear in 8 rows of 8. 
                There are 32 light squares and 32 dark squares.Place the board so that each player has a light-colored square
                 on the corner of the board on his or her right side.
              </span>
            </p>
          </li>
          <li class=paragraph-heading>
            Checkers Rules and Gameplay<br>
            <img src="../assets/tutorial/Play-Checkers-Step-14-Version-6.360p.gif"/>
            <p>
              <span class=paragraph-text>
                Sit across from your opponent and place the board between you and your opponent.
                The board is made up of 64 alternating dark and light squares which appear in 8 rows of 8. 
                There are 32 light squares and 32 dark squares. Place the board so that each player has 
                a light-colored square on the corner of the board on his or her right side.
              </span>
            </p>
          </li>
          <li class=paragraph-heading>
            READ MORE HERE<br>
            <a href="https://www.wikihow.com/Play-Checkers" id="githubbutton">HOW TO PLAY CHECKERS</a>     
          </li>
        </ol>
      </div>
    </div>
  </div>
</template>

<style scoped>
  .site-heading{
    text-align: center;
    font-family: Arial;
    font-size: 40px;
  }
  .paragraph-heading{
    color: green;
    font-size: 18px;
    text-align: center;
    list-style-position: inside;
  }
  .paragraph-text{
    color: black;
    font-size: 16px;
    text-align: center;
  }
  .paragraph-text-bold{
    font-weight: bold;
  }

  @media (min-width:576px) {
    .site-heading{
      font-size: 50px;
    }
    .paragraph-heading{
      font-size: 18px;
    }
    .paragraph-text{
      font-size: 16px;
    }
  }

  @media (min-width:768px) {
    .site-heading{
      font-size: 60px;
    }
    .paragraph-heading{
      font-size: 22px;
    }
    .paragraph-text{
      font-size: 20px;
    }
  }

  @media (min-width:992px) {
    .site-heading{
      font-size: 70px;
    }
    .paragraph-heading{
      font-size: 26px;
    }
    .paragraph-text{
      font-size: 23px;
    }
  }

  @media (min-width:1200px) {
    .site-heading{
      font-size: 80px;
    }
    .paragraph-heading{
      font-size: 30px;
    }
    .paragraph-text{
      font-size: 25px;
    }
  }
</style>