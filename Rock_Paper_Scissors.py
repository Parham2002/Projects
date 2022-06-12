import time
import random

def Play():
    user = input ("type 'r' for rock, 'p' for paper, and 's' for scissors: ").lower()
    AI = random.choice(['r', 'p', 's'])
    Things = {
    "r" : "rock",
    "p" : "paper",
    "s" : "scissors"
    }
    if user == AI:
        time.sleep(1)
        print(f"The opponent chose {Things[AI]}.")
        return "It's a tie!"

    if Victory(user, AI):
        time.sleep(1)
        print(f"The opponent chose {Things[AI]}.")
        return "You won!!"
    time.sleep(1)
    print(f"The opponent chose {Things[AI]}.")
    return "You lost!"

def Victory(Player, Opponent):
    if (Player == "r" and Opponent == "s" or Player == "s" and Opponent == "p" or \
        Player == "p" and Opponent == "r"):
        return True

print(Play())

while True:
    Retry = input("Would you like to try again? y/n").lower()
    if Retry == "y":
        print(Play())
    else:
        break
