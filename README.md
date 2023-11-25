## Parei na aula: serindo comentários (Programação declarativa) aos 10:38

Dentro do React, nós geralmente optamos pela programação declarativa ao invés da imperativa.

# Programação imperativa

Dizemos ao código passo-a-passo o que deve ser feito.

## Receita de bolo

1. Ligar o forno a 180°
2. Abrir a porta do forno
3. Etc...


# Key no react

## Por que ela deve ser única?
Para que o react consiga fazer um mapeamento preciso daquele elemento e não bugue ao re-renderizar o elemento.

Há 3 momentos em que um componente é renderizado:

1. Quando seu estado altera
2. Quando a propriedade é alterada
3. Quando um componente pai é renderizado novamente

## Por que não posso usar o inidice do array?

Se por algum motivo você alterar o os items de lugar no array, o react entenderá que é necessário recarregar toda a lista ao invés de recarregar apenas os itens alterados, e isso pesará muito no desempenho. 

## Os Use State do react trabalham com imutabilidade

Isso significa que os valores não sofrem mutação (como adição ou subtração), para alterar o valor de um estado você deve passar qual será o novo valor dele.

Parei na aula: Validando formulário
