var cat = {
        tiredness: 20,
        hunger: 20,
        lonliness: 3,
        happiness: 15,
        obedientness: -5000,
        feed: function(){
            console.log("Om nom nom");
            this.hunger = this.hunger - 5;
        },
        sleep: function(minutes){
            console.log("Zzzzzz");
            this.tiredness = this.tiredness - minutes;
        },
        pet: function() {
            if (this.lonliness > 5){
                console.log("purrrrrr");
                this.happiness = this.happiness + 10;
                this.lonliness = this.lonliness - 5;
            }
            else {
                console.log("You're about to get scratched.");
            }
         },
        laser: function(minutes) {
            console.log("meow");
            this.tiredness = this.tiredness + minutes;
            this.happiness = this.happiness + 5;
            this.hunger = this.hunger + minutes;
        },
        workDay: function() {
            console.log("Needy kitty.");
            this.lonliness = this.lonliness + 5;
        },
        status: function(){
            console.log(this.tiredness,
                        this.hunger,
                        this.lonliness,
                        this.happiness,
                        this.obedientness);
        }

};

cat.workDay();
cat.pet();
cat.status();