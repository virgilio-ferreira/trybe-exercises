#Execute arquivo.sh x y z
#Cria x arquivos.js na pasta y com o nome z

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
    echo "//exercicio${i}" > "./$2/$3${i}.js"
done

rm cont.txt
# creditos vladimir chagas