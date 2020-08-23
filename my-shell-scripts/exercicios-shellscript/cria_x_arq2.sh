#!/bin/bash
#echo 'Quantos arquivos você quer?'
#read n
#echo 'Qual o nome dos arquivos?'
#read nome
#for i in {1..$n}
for i in {1..12}
do
    #touch "$nome_${i}.sh"
    #echo "#!/bin/bash" >$nome_${i}.sh
    #chmod +x "$nome_${i}.sh"
    echo "#!/bin/bash" >"exercise${i}.sh"
    chmod +x "exercise${i}.sh"
done

