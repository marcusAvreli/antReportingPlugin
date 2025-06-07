inspired by: https://github.com/sergevoina/identityiq-plugin-scaffolding
above project written with gradle

current project built with ant

url to access plugin: http://<base_url>/iiq/plugins/pluginPage.jsf?pn=antReportingPlugin


git add without unnecessary files:

git add -- . :!"output" :!"WebContent/macForm/dist" :!"WebContent/macForm/node_modules":!"WebContent/macForm/.angular" :!"bin" :!"classes" :!"output"


curl http://spadmin:admin@<base_url>/iiq/rest/plugins   --form file=@local_zipped_archive.zip;fileName=zip_name_on_server.zip