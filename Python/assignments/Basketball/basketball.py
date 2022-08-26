players = [
    {
        "name": "Kevin Durant",
        "age": 34,
        "position": "small forward",
        "team": "Brooklyn Nets"
    },
    {
        "name": "Jason Tatum",
        "age": 24,
        "position": "small forward",
        "team": "Boston Celtics"
    },
    {
        "name": "Kyrie Irving",
        "age": 32,
        "position": "Point Guard",
        "team": "Brooklyn Nets"
    },
    {
        "name": "Damian Lillard",
        "age": 33,
        "position": "Point Guard",
        "team": "Portland Trailblazers"
    },
    {
        "name": "Joel Embiid",
        "age": 32,
        "position": "Power Foward",
        "team": "Philidelphia 76ers"
    },
    {
        "name": "DeMar DeRozan",
        "age": 32,
        "position": "Shooting Guard",
        "team": "Chicago Bulls"
    }
]

class Player:
    def __init__(self, name, age, position, team):
        self.name = name
        self.age = age
        self.position = position
        self.team = team

    def info(self):
        print("*"*80)
        attrs = vars(self)
        for key in attrs:
            print(f"{key} : {attrs[key]}")
        print("*"*80)
        return self
    
    @classmethod
    def get_team (cls, team_list):
        new_team=[]
        for i in range(len(players)-1):
                new_team.append(players[i]["name"])
                new_team.append(players[i]["age"]) 
                new_team.append(players[i]["position"])
                new_team.append(players[i]["team"])
                i = i + 1
        else:
            i == len(players)
            print(f"The new team consists of {new_team}")
        return new_team






kevin = Player(players[0]["name"],players[0]["age"], players[0]["position"], players[0]["team"])
jason = Player(players[1]["name"],players[1]["age"], players[1]["position"], players[1]["team"])
kyrie = Player(players[2]["name"],players[2]["age"], players[2]["position"], players[2]["team"])
damian = Player(players[3]["name"],players[3]["age"], players[3]["position"], players[3]["team"])
joel = Player(players[4]["name"],players[4]["age"], players[4]["position"], players[4]["team"])
demar = Player(players[5]["name"],players[5]["age"], players[5]["position"], players[5]["team"])



kevin.info()
jason.info()
kyrie.info()
damian.info()
joel.info()
demar.info()
Player.get_team(players)
