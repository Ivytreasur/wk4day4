class Monk extends Character {
  constructor(name) {
    super(name, 12, 40, 3);
  }

  heal() {
    if (this.mana >= 10) {
      this.mana -= 10;
      this.hp += 5;
      console.log(`${this.name} heals for 5 HP`);
    }
  }
}
