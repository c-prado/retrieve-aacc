1. Criar proj retrieve-aacc
2. Criar scratch org
3. Criar package.xml
4. Executar retrieve
5. Executar deploy --checkonly
6. Corrigir package.xml

# retrieve
sfdx force:source:retrieve -x manifest/package.xml
sfdx force:source:retrieve -m "Layout:Account-Retail Account"

# listar
sfdx force:org:list

# autenticar
sfdx auth:jwt:grant --instanceurl https://test.salesforce.com --clientid $CLIENT_ID --username $xxxxxx --jwtkeyfile $GITHUB_WORKSPACE/devops/server.key --json

# deploy p scratch org
sfdx force:source:deploy -x ./manifest/package.xml -u test-ovkdvk8nbdkk@example.com -w 30 --checkonly --testlevel RunLocalTests --json

# deploy de aacc para dev01
sfdx force:source:deploy -x ./manifest/package.xml -u cprado@salesforce.com.dev01 -w 30 --checkonly --testlevel RunLocalTests --json

# deploy p nova org fsc trial
sfdx force:source:deploy -x ./manifest/package.xml -u cprado@salesforce.com.trial.fsc -w 30 --checkonly --testlevel RunLocalTests --json

sfdx force:source:deploy -u cprado@salesforce.com.trial.fsc -p force-app/main/default/reports

# destructive changes
sfdx force:source:deploy --manifest package.xml --postdestructivechanges destructiveChangesPost.xml --checkonly -u cprado@salesforce.com.trial.fsc 