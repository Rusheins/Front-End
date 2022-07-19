# Front-End
Repositorio de Front End del proyecto #YoProgramo
U : Untracked Files (git todavia no tiene registros)
M : modified (esta modificado)
A : added (agregado git add . o git add archivo.extension)
! : conflict (conflicto, modificados y no estan cerrados)
_______________________________
git commit : Captura una instantánea de los cambios preparados en ese momento del proyecto. Las instantáneas confirmadas pueden considerarse como versiones "seguras" de un proyecto: Git no las cambiará nunca a no ser que se lo pidas expresamente. Antes de ejecutar git commit, se utiliza el comando git add para pasar o "preparar" los cambios en el proyecto que se almacenarán en una confirmación. Estos dos comandos, git commit y git add, son dos de los que se utilizan más frecuentemente.
git commit -m "descripcion"

git add : Añade un cambio del directorio de trabajo en el entorno de ensayo. De este modo, indica a Git que quieres incluir actualizaciones en un archivo concreto en la próxima confirmación.
git add .

git push : El comando git push se usa para cargar contenido del repositorio local a un repositorio remoto. El envío es la forma de transferir confirmaciones desde tu repositorio local a un repositorio remoto.
git push

git merge: La fusión es la forma que tiene Git de volver a unir un historial bifurcado. El comando git merge permite tomar las líneas independientes de desarrollo creadas por git branch e integrarlas en una sola rama.
Ten en cuenta que todos los comandos presentados a continuación se fusionan en la rama actual. La rama actual se actualizará para reflejar la fusión, pero la rama de destino no se verá afectada en absoluto. Una vez más, esto significa que git merge se suele utilizar junto con git checkout para seleccionar la rama actual y git branch -d para eliminar la rama de destino obsoleta.
git merge origin/main

git checkout: Permite desplazarte entre las ramas creadas por git branch. Al extraer una rama, se actualizan los archivos en el directorio de trabajo para reflejar la versión almacenada en esa rama y se indica a Git que registre todas las confirmaciones nuevas en dicha rama. Puedes contemplar todo esto como una forma de seleccionar la línea de desarrollo en la que trabajas.