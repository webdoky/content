FROM erikvl87/languagetool

# Improving the spell checker
# http://wiki.languagetool.org/hunspell-support
USER root
COPY uk_*_additions.txt ./
RUN  (echo; cat uk_spelling_additions.txt) >> org/languagetool/resource/uk/hunspell/spelling.txt
RUN  (echo; cat uk_ignore_additions.txt) >> org/languagetool/resource/uk/hunspell/ignore.txt
RUN  (echo; cat uk_prohibited_additions.txt) >> org/languagetool/resource/uk/hunspell/prohibited.txt
USER languagetool
