FROM erikvl87/languagetool

# Improving the spell checker
# http://wiki.languagetool.org/hunspell-support
USER root
COPY uk_spelling_additions.txt uk_spelling_additions.txt
RUN  (echo; cat uk_spelling_additions.txt) >> org/languagetool/resource/uk/hunspell/spelling.txt
USER languagetool