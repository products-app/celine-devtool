.PHONY: clean, test, install

clean:
	rm -rf *.out *.xml htmlcov

install:
	python -m venv venv && \
		. venv/bin/activate && \
		pip install -r requirements.txt

test: install
	. venv/bin/activate && \
		pytest --cov=src tests
