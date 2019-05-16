oc new-app httpd:2.4~build/ --name effektui
oc start-build buildconfig.build.openshift.io/effektui --from-dir build/
