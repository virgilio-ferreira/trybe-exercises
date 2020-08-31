#Execute arquivo.sh x y
#Cria x arquivos.js na pasta y
#Dica: se não quiser outra pasta coloque .

mkdir $2
cat cont.txt > cont.txt
cont=1
while [ $cont -le $1 ]
do
    echo $cont >> cont.txt
    cont=`expr $cont + 1`
done
for i in `cat cont.txt`
do
    echo "//exercicio${i}" > "./$2/exercise${i}.js"
done

rm cont.txt
# creditos vladimir chagas