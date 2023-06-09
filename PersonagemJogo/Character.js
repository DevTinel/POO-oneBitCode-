class Character {
    #money;
    constructor(name, lifePoints, attackPoints, defensePoints) {
        (this.name = name),
            (this.lifePoints = lifePoints),
            (this.attackPoints = attackPoints),
            (this.defensePoints = defensePoints);
    }
    attack(targetName, targetLife, targetAttack, targetDefense) {
        let dano = this.attackPoints - targetDefense;
        targetName, (targetLife -= dano), targetAttack, targetDefense;
        return { targetName, targetLife, targetAttack, targetDefense };
    }
}

class Thief extends Character {
    attack(targetName, targetLife, targetAttack, targetDefense) {
        let dano =
            this.attackPoints * 2 - targetDefense < 0
                ? 0
                : this.attackPoints * 2 - targetDefense;

        targetLife -= dano;

        return `
        
        Atacante: ${this.name},
        Pontos de vida: ${this.lifePoints},
        Pontos de ataque: ${this.attackPoints},
        Pontos de defesa: ${this.defensePoints}
        
        ${this.name} atacou ${targetName} com ${
            this.attackPoints
        } pontos de ataque e causou ${dano} aos pontos de vida.
        
        Defensor: ${targetName},
        Vida Restante:${targetLife + dano} / ${targetLife},
        Pontos de Ataque: ${targetAttack},
        Pontos de Defesa: ${targetDefense}
        `;
    }
}

class Mage extends Character {
    constructor(name, lifePoints, attackPoints, defensePoints, magePoints) {
        super(name, lifePoints, attackPoints, defensePoints);
        this.magePoints = magePoints;
    }

    attack(targetName, targetLife, targetAttack, targetDefense) {
        let dano =
            this.attackPoints + this.magePoints - targetDefense < 0
                ? 0
                : this.attackPoints + this.magePoints - targetDefense;
        targetLife -= dano;
        return `
        Atacante: ${this.name},
        Pontos de vida: ${this.lifePoints},
        Pontos de ataque: ${this.attackPoints},
        Pontos de defesa: ${this.defensePoints},
        Pontos de magia: ${this.magePoints}
        
        ${this.name} atacou ${targetName} com ${
            this.attackPoints
        } pontos de ataque e ${
            this.magePoints
        } de magia e causou ${dano} aos pontos de vida.
        
        Defensor: ${targetName},
        Vida Restante:${targetLife + dano} / ${targetLife},
        Pontos de Ataque: ${targetAttack},
        Pontos de Defesa: ${targetDefense}
        `;
    }

    heal(targetName, targetLife) {
        const heal = targetLife * 2;
        return `${this.name} curou ${targetName} em ${heal} de vida`;
    }
}
const Gandalf = new Mage("Gandalf", 5000, 300, 200, 500);

const warriorAtacker = new Character("Pride", 5000, 500, 500);
const fullDano = new Thief("Full Dano", 3000, 700, 400);
console.log(fullDano.attack("Pride", 5000, 500, 300));

console.log(Gandalf.heal("Pride", 900));
console.log(Gandalf.attack("Pride", 5000, 300, 300));

class Warrior extends Character {
    constructor(
        name,
        lifePoints,
        attackPoints,
        defensePoints,
        shieldPoints,
        position
    ) {
        super(name, lifePoints, attackPoints, defensePoints);
        this.shieldPoints = shieldPoints;
        this.position = position;
    }

    attack(targetName, targetLife, targetAttack, targetDefense, targetShield) {
        let dano =
            this.attackPoints - targetDefense < 0
                ? 0
                : this.attackPoints - targetDefense;

        targetLife -= dano;
        if (this.#getPosition()) {
            return `
           
            Atacante: ${this.name},
            Pontos de vida: ${this.lifePoints},
            Pontos de ataque: ${this.attackPoints},
            Pontos de defesa: ${this.defensePoints},
            
            ${this.name} atacou ${targetName} com ${
                this.attackPoints
            } pontos de ataque e causou ${dano} aos pontos de vida.
            
            Defensor: ${targetName},
            Vida Restante:${targetLife + dano} / ${targetLife},
            Pontos de Ataque: ${targetAttack},
            Pontos de Defesa: ${targetDefense}
            `;
        } else {
            return "Voce precisa mudar sua posição para ataque para atacar";
        }
    }

    #getPosition() {
        if (this.position == "attack") {
            return true;
        } else {
            return false;
        }
    }

    tradePosition(position) {
        if (position == "attack") {
            this.position = "attack";
            return "Posição trocada para ataque!";
        } else if (position == "defense") {
            this.position = "defense";
            return "Posição trocada para defensa!";
        } else {
            return "Escolha entre ( attack ou defense )";
        }
    }
}
const waw = new Warrior("GameOver", 3000, 800, 500, 500, "attack");
const kratos = new Warrior("Kratos", 5000, 300, 500, 1000, "defense");

console.log(waw.tradePosition("attack"));
console.log(waw.attack("Kratos", 5000, 0, 0, 300, "attack"));
