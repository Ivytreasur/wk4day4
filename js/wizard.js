class Wizard extends Character {
  constructor(name) {
    super(name, 10, 200, 2);
  }

  fireball(target) {
    if (this.mana >= 25) {
      this.mana -= 25;
      console.log(`${this.name} casts Fireball on ${target.name}`);
      target.takeDamage(7);
    }
  }
}
