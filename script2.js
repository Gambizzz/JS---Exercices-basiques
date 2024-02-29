let n = prompt("De quel nombre veux-tu calcluer la factorielle ?")
function fact(n)
{
  if (n == 0)
  {
    return 1;
  }
  return n * fact(n-1);
}
answer = fact(n);
console.log(`La factorielle de ${n} est : ${answer}`);