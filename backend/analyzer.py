import os
import subprocess
from typing import Dict, List

class RepoAnalyzer:
  def __init__(self, repo_path: str):
    self.repo_path = repo_path

def detect_languages(self) -> List[str]:
  """Detecte les languages utiliser dans les repo"""
  languages = []
  if
  os.path.exists(os.path.join(self.repo_path, 'package.json')):
    languages.extend(['JavaScript', 'Node.js'])
    if
    os.path.exists(os.path.join(self.repo_path, 'requirements.txt')):
      languages.append('Python')
      if
      os.path.exists(os.path.join(self.repo_path, 'go.mod')):
        languages.append('Go')
        return languages or ['Multi-Language']

def get_dependencies(self) -> Dist[str, List[str]]:

  deps = {}
  # ton cul
  if
  os.path.exists(os.path.join(self.repo_path, 'requirements.txt')):
    with
    open(os.path.join(self.repo_path, 'requirements.txt')) as f:
      deps['Python'] = [Line.strip().split('==')[0] for line in f if line.strip()]
      # node js...
