cat cont.txt > cont.txt
cont=1
​
while [ $cont -le $1 ]
do
    echo $cont >> cont.txt
    cont=`expr $cont + 1`
done
​
for i in `cat cont.txt`
do
    echo "" > "./exercise${i}.js"
done
