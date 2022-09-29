from py.py import Halfling, Orc, Character

class Game:
    def __init__(self, p1, p2):
        self.p1 = p1
        self.p2 = p2

    def battle(self):
        self.p1.attack(self.p2)
        Character.show_stats()
        return self



c1 = Halfling('Eric the brave', attack_pwr=10)
c2 = Character('Cody the terible')


new_game = Game(c1, c2)
new_game.battle()
