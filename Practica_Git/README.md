# PracticaGit
¿Qué comando utilizaste en el paso 11? ¿Por qué?

git reset --hard HEAD~1 para mover los punteros a la posicion anterior y reset hard para modificar los archivos en el working copy para que coincidan.

12- ¿Qué comando o comandos utilizaste en el paso 12? ¿Por qué?

git reflog para localizar el commit que necesito y git reset --hard a596a2b para mover los punteros a ese commit y cambiar los archivos del working area

13- El merge del paso 13, ¿Causó algún conflicto? ¿Por qué?

No causa conflicto porque los cambios de Master ya los tiene styled al estar en la misma linea

19- El merge del paso 19, ¿Causó algún conflicto? ¿Por qué?

Causo conflicto porque los archivos git-nuestro.md habian sido modificad en las mismas lineas.

21- El merge del paso 21, ¿Causó algún conflicto? ¿Por qué?

No causo conflicto porque he utilizado un merge fast-forward.

25- ¿Qué comando o comandos utilizaste en el paso 25?

git log --graph

26- El merge del paso 26, ¿Podría ser fast forward? ¿Por qué?

Si por que estan en la misma linea y master no contiene ningun cambio que no este en title.

27- ¿Qué comando o comandos utilizaste en el paso 27?

git reset HEAD~1

28- ¿Qué comando o comandos utilizaste en el paso 28?

git checkout git-nuestro.md

29- ¿Qué comando o comandos utilizaste en el paso 29?

git branch -D title

30- ¿Qué comando o comandos utilizaste en el paso 30?

git reset --hard HEAD@{1}

32- ¿Qué comando o comandos usaste en el paso 32?

git reset --hard HEAD~3

33- ¿Qué comando o comandos usaste en el punto 33?

git reset --hard HEAD@{1}
