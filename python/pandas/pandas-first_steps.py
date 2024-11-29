import pandas as pd

data = [2, 3, 4, 2, "s", 2]
serie = pd.Series(data)

# ? convertir a numero y pasar otros
clean_serie = pd.to_numeric(serie, errors="coerce")

# ? convertir y depurar not num
# clean_serie = clean_serie.dropna()

# ? convertir y rellenar si hay errores
clean_serie = clean_serie.fillna(-1)

# ? filtrar por tipo
clean_serie = clean_serie.astype(dtype=int)

clean_serie = clean_serie.drop_duplicates()

print(clean_serie)
